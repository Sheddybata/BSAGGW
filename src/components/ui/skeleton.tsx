import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface SkeletonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag'>, HTMLMotionProps<'div'> {
  animated?: boolean
}

function Skeleton({
  className,
  animated = true,
  ...props
}: SkeletonProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-md bg-green-100",
        animated && "animate-pulse",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#22c55e] to-transparent opacity-10"
      />
    </motion.div>
  )
}

export { Skeleton }
