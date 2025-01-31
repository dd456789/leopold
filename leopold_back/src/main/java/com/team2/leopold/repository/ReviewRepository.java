package com.team2.leopold.repository;

import com.team2.leopold.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    @Query("SELECT r FROM Review r WHERE deleteYn = 'n'")
    Page<Review> findReviewByUid(Pageable pageable);
}
